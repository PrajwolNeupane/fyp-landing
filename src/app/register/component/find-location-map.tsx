"use client";
import { Map, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import { GALLI_KEY } from "@/constants";
import GalliAutocomplete from "./box";
import { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReverseGeocoding } from "@/types";
import { UseFormSetValue } from "react-hook-form";
import { CreateOrganizationInterface } from "@/schema";

export default function FindLocationMap({
  setValue,
}: {
  setValue: UseFormSetValue<CreateOrganizationInterface>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef && location) {
      //@ts-expect-error
      mapRef.current?.flyTo({
        center: [location.longitude, location.latitude],
        essential: true,
      });
    }
  }, [location, mapRef]);

  const getLocation = async (lat: number, lon: number) => {
    try {
      const response: AxiosResponse<{ data: ReverseGeocoding }> =
        await axios.get(
          `https://route-init.gallimap.com/api/v1/reverse/generalReverse`,
          {
            params: {
              accessToken: GALLI_KEY,
              lat: lat,
              lng: lon,
            },
          }
        );
      setSearchQuery(response?.data?.data?.generalName);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-3 border border-gray-700 w-full rounded-xl col-span-2 relative flex flex-col gap-3">
      <GalliAutocomplete
        setLocation={setLocation}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Map
        onClick={async (e) => {
          setValue("lat", e?.lngLat?.lat);
          setValue("lon", e?.lngLat?.lng);
          setLocation({
            latitude: e?.lngLat?.lat,
            longitude: e?.lngLat?.lng,
          });
          await getLocation(e?.lngLat?.lat, e?.lngLat?.lng);
        }}
        ref={mapRef}
        //@ts-expect-error
        mapLib={maplibregl}
        style={{
          width: "100%",
          height: "90%",
          borderRadius: "12px",
        }}
        initialViewState={{
          latitude: 27.7172,
          longitude: 85.324,
          zoom: 14,
        }}
        mapStyle={`https://map-init.gallimap.com/styles/light/style.json?accessToken=${GALLI_KEY}`}
      >
        {location && (
          <Marker
            latitude={location?.latitude}
            longitude={location?.longitude}
          />
        )}
      </Map>
      <p className="text-3xs text-gray-600">
        To enable onsite employee attendance, we require your organization's
        latitude and longitude. This information is optional and only needed if
        you wish to track onsite attendance. You can skip this step if it's not
        needed, or choose to set it up later.
      </p>
    </div>
  );
}
