import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  input: {
    vorname: "",
    nachname: "",
    email: "",
    adresse: "",
    postleitzahl: "",
    passwort: "",
    repeatedPasswort: "",
    privacy: false,
    touched: {
      vorname: false,
      nachname: false,
      email: false,
      passwort: false,
      repeatedPasswort: false,
      privacy: false,
    },
    notifications: false,
    gps: false,
    isValid: false,
    isRegistered: false,
  },
  validatedObject: null,
  registeredObjects: [],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput(state, action) {
      //state.input = action.payload;
      //console.log(action.payload); // => {name: 'vorname', value: 'anne'}

      const { name, value, type } = action.payload;
     

      if(type === 'onChange'){
          state.input[name] = value;
          //console.log('onChange')
          //console.log(action.payload);
      } 
      if(type === 'onBlur'){
          //console.log('onBlur')
          state.input.touched[name] = true;
          //console.log(action.payload);

      }

      if(name === 'privacy'){
          console.log('touched privacy')
          state.input.touched[name] = value;
      }

      

      

      // Markiere das Feld als berührt
      //state.input.touched[name] = true;
      

      //console.log(JSON.parse(JSON.stringify(state.input)));
    },
    validateInput(state) {
      // Hier kannst du deine Validierungslogik implementieren
      // Wenn das Objekt erfolgreich validiert wurde, setze es in den "validatedObject"
      /*if (/* Validierung erfolgreich ) {
        state.validatedObject = state.input;
      }*/
      const { vorname, nachname, email, passwort, repeatedPasswort, privacy } =
        state.input;

 
        //console.log(JSON.parse(JSON.stringify(state.input.touched)));

        state.errors ={}



        /*
      // Initialisiere das errors-Objekt, wenn ein Feld berührt wurde
      if (Object.values(state.input.touched).some(touched => touched)) {
        state.errors = {};
      }*/

      // Vorname Validierung
      if (state.input.touched.vorname && vorname.trim() === "") {
        state.errors.vorname = "Vorname ist erforderlich!";
      }

      // Nachname Validierung
      /*
      #
      
        state.errors.nachname = "Nachname ist erforderlich!";
      }*/

      // Email Validierung
      if (state.input.touched.email && email.trim() === "") {
        state.errors.email = "Email ist erforderlich!";
      } /*else if (!isValidEmail(email)) {
        state.errors.email = "Ungültige Email-Adresse!";
      }*/

      // Passwort Validierung
      if (state.input.touched.passwort && passwort.trim() === "") {
        state.errors.passwort = "Passwort ist erforderlich!";
      }

      // Wiederholtes Passwort Validierung
      if (state.input.touched.repeatedPasswort && repeatedPasswort.trim() === "") {
        state.errors.repeatedPasswort = "Passwort wiederholen!";
      } else if (repeatedPasswort !== passwort) {
        state.errors.repeatedPasswort = "Passwörter stimmen nicht überein!";
      }

      // Datenschutz Validierung
      if (!state.input.touched.privacy && !privacy) {
        state.errors.privacy = "Dem Datenschutz muss zugestimmt werden!";
      }

      

      //console.log(state.errors); // Fehlerobjekt anzeigen



      if (Object.keys(state.errors).length === 0) {
        state.input.isValid = true;
        //console.log(state.isValid);
      } else {
        state.input.isValid = false;
        //console.log(state.isValid);
      }
    

    },
    registerInput(state) {
      // Füge das erfolgreich registrierte Objekt zum Array "registeredObjects" hinzu
       if (state.input.isValid) {
         state.registeredObjects.push(state.input);
         state.input.isRegistered = true;
         console.log('user registriert')
         console.log(JSON.parse(JSON.stringify(state.registeredObjects)));
       }
    },
  },
});

export const { updateInput, validateInput, registerInput } = inputSlice.actions;

export default inputSlice.reducer;

