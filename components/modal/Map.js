import { useEffect, useRef } from "react";
import { Map as LeafletMap, TileLayer } from "leaflet";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      import("leaflet").then((L) => {
        const map = L.map("map").setView([53.5511, 9.9937], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );
        mapRef.current = map;
      });
    }
  }, []);

  return <div id="map" style={{ height: "400px", minHeight: "300px" }}></div>;
};

export default Map;

/*


import { useEffect, useRef } from "react";
import { Map as LeafletMap, TileLayer } from "leaflet";
import { useRouter } from "next/router";
import Head from "next/head";

const MyMap = () => {
  const router = useRouter();
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      const map = new LeafletMap("map").setView([53.5511, 9.9937], 13);
      new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );
      mapRef.current = map;
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
      </Head>
      <div id="map" style={{ height: "400px", minHeight: "300px" }}></div>
    </>
  );
};

export default MyMap;

*/

/* FUNKTIONIERT KOMPLET VERSCHOBEN


import { useEffect, useRef } from "react";
import L from "leaflet";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Erstelle eine Karte und setze den Ausschnitt auf Hamburg
      const map = L.map("map").setView([53.5511, 9.9937], 13);

      // Füge einen OpenStreetMap-Kartenausschnitt hinzu
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Speichere die Karte in der React-Referenz
      mapRef.current = map;
    }
  }, []);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default Map;

*/

/*


import { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    let map = null;

    // Überprüfe, ob die Karte bereits initialisiert wurde
    if (!map) {
      // Erstelle eine Karte und setze den Ausschnitt auf Hamburg
      map = L.map("map").setView([53.5511, 9.9937], 13);

      // Füge einen OpenStreetMap-Kartenausschnitt hinzu
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  }, []);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default Map;


*/

/*import { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    // Erstelle eine Karte mit Hamburg als Fokus
    const map = L.map("map").setView([53.5511, 9.9937], 13);

    // Füge einen OpenStreetMap-Kartenlayer hinzu
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default Map;
*/
