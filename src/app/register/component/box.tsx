"use client";
import { GALLI_KEY } from "@/constants";
import { SearchAddress } from "@/types";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const GalliAutocomplete = ({
  searchQuery,
  setLocation,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<
    SetStateAction<{ latitude: number; longitude: number } | null>
  >;
}) => {
  const [suggestions, setSuggestions] = useState<SearchAddress[]>([]);
  const [loading, setLoading] = useState(false);

  // Galli Maps API details
  const currentLat = "27.7172"; // Example latitude (Kathmandu)
  const currentLng = "85.3240"; // Example longitude (Kathmandu)

  // Function to call GalliMaps Autocomplete API
  const fetchAutocompleteSuggestions = async (query: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://route-init.gallimap.com/api/v1/search/currentLocation`,
        {
          params: {
            accessToken: GALLI_KEY,
            name: query,
            currentLat,
            currentLng,
          },
        }
      );
      setSuggestions(response.data?.data?.features);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch suggestions when the user types
  useEffect(() => {
    if (searchQuery.length >= 3) {
      const delayDebounceFn = setTimeout(() => {
        fetchAutocompleteSuggestions(searchQuery);
      }, 300); // Delay to prevent too many requests
      return () => clearTimeout(delayDebounceFn); // Cleanup timeout
    }
  }, [searchQuery]);

  return (
    <div className="absolute z-[99] mt-2 ml-2 w-1/3 rounded-lg bg-white">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search location..."
        className="w-full text-4xs p-1 outline-none border rounded-lg border-gray-700 bg-transparent"
      />
      {searchQuery !== "" && (
        <div className="flex flex-col">
          {suggestions?.length != 0 ? (
            <>
              {suggestions?.slice(0, 7).map((curr, index) => {
                if (
                  curr.properties.searchedItem &&
                  curr?.properties?.municipality &&
                  curr?.properties?.province &&
                  curr?.properties?.district &&
                  curr?.geometry?.coordinates.length == 2
                ) {
                  return (
                    <div
                      key={index}
                      className="p-1 cursor-pointer hover:bg-gray-100 ease-in-out duration-300"
                      onClick={() => {
                        setSearchQuery(curr?.properties?.searchedItem!);
                        setLocation({
                          longitude: curr?.geometry?.coordinates[0],
                          latitude: curr?.geometry?.coordinates[1],
                        });
                      }}
                    >
                      <h1 className="text-4xs font-medium">
                        {curr.properties.searchedItem}
                      </h1>
                      <p className="text-[11px] text-gray-600">
                        {curr?.properties.municipality},{" "}
                        {curr?.properties?.district},{" "}
                        {curr?.properties?.province}
                      </p>
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default GalliAutocomplete;
