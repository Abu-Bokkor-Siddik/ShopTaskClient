/* eslint-disable prettier/prettier */
"use client";
import {Autocomplete, AutocompleteItem} from "@heroui/autocomplete";

export const animals = [
  {label: "Cat", key: "cat", description: "The second most popular pet in the world"},
  {label: "Dog", key: "dog", description: "The most popular pet in the world"},
  {label: "Elephant", key: "elephant", description: "The largest land animal"},
  {label: "Lion", key: "lion", description: "The king of the jungle"},
  {label: "Tiger", key: "tiger", description: "The largest cat species"},
  {label: "Giraffe", key: "giraffe", description: "The tallest land animal"},
];

export default function Auto() {
  return (
    <div className="flex w-40 mr-8 flex-wrap md:flex-nowrap ">
      <Autocomplete className="max-w-xs" label="Eng">
        {animals.map((animal) => (
          <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
        ))}
      </Autocomplete>
     
    </div>
  );
}
