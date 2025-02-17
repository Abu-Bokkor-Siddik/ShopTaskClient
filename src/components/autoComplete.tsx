/* eslint-disable prettier/prettier */
"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";

export const animals = [
  {
    label: "Cat",
    key: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    key: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    key: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", key: "lion", description: "The king of the jungle" },
  { label: "Tiger", key: "tiger", description: "The largest cat species" },
  { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
];

export default function Auto() {
  return (
    // <div className="flex w-20 bg-neutral-700 mr-8 flex-wrap md:flex-nowrap ">
    //   <Autocomplete className="max-w-xs" label="Eng">
    //     {animals.map((animal) => (
    //       <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
    //     ))}
    //   </Autocomplete>

    // </div>
    <div className="flex justify-center items-center ">
      <div >
      <select defaultValue="eng" className="select bg-neutral-700 select-bordered mr-10 w-24 text-neutral-300">
        <option disabled selected>
        Select language
        </option>
        <option>Eng</option>
        <option>Bangla</option>
      </select>
      </div>
      {/*  */}
      <div>
      <select defaultValue="eng" className="select bg-neutral-700 select-bordered mr-10 w-24 text-neutral-300">
        <option disabled selected>
        Select language
        </option>
        <option>Eng</option>
        <option>Bangla</option>
      </select>
      </div>
    </div>
  );
}
