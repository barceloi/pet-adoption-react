import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { a as jsx, j as jsxs, A as AdoptedPetContext } from "../ServerApp.js";
import { Link } from "react-router-dom";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react/jsx-runtime";
const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal)
    return [];
  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }
  return apiRes.json();
};
function useBreedList(animal) {
  var _a, _b;
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [(_b = (_a = results == null ? void 0 : results.data) == null ? void 0 : _a.breeds) != null ? _b : [], results.status];
}
async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }
  return res.json();
}
const Pet = ({
  name,
  animal,
  breed,
  images,
  location,
  id
}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return /* @__PURE__ */ jsx(Link, {
    to: `details/${id}`,
    className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-1 flex-col p-8",
      children: [/* @__PURE__ */ jsx("img", {
        src: hero,
        alt: name,
        className: "mx-auto h-32 w-32 flex-shrink-0 rounded-full"
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-6 text-sm font-medium text-gray-900",
        children: [/* @__PURE__ */ jsx("h2", {
          children: name
        }), /* @__PURE__ */ jsxs("h3", {
          children: [animal, " - ", breed, " - ", location]
        })]
      })]
    })
  });
};
const Results = ({
  pets
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3",
    children: !pets.length ? /* @__PURE__ */ jsx("h1", {
      children: "No se encontraron mascotas"
    }) : pets.map((pet) => /* @__PURE__ */ jsx(Pet, {
      animal: pet.animal,
      id: pet.id,
      name: pet.name,
      breed: pet.breed,
      images: pet.images,
      location: `${pet.city}, ${pet.state}`
    }, pet.id))
  });
};
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  var _a, _b;
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: ""
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = (_b = (_a = results == null ? void 0 : results.data) == null ? void 0 : _a.pets) != null ? _b : [];
  return /* @__PURE__ */ jsxs("div", {
    className: "my-0 mx-auto w-11/12",
    children: [/* @__PURE__ */ jsxs("form", {
      className: "mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg",
      onSubmit: (e) => {
        var _a2, _b2, _c;
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: (_a2 = formData.get("animal")) != null ? _a2 : "",
          breed: (_b2 = formData.get("breed")) != null ? _b2 : "",
          location: (_c = formData.get("location")) != null ? _c : ""
        };
        setRequestParams(obj);
      },
      children: [adoptedPet ? /* @__PURE__ */ jsx("div", {
        className: "pet image-container",
        children: /* @__PURE__ */ jsx("img", {
          src: adoptedPet.images[0],
          alt: adoptedPet.name
        })
      }) : null, /* @__PURE__ */ jsxs("label", {
        htmlFor: "location",
        children: ["Location", /* @__PURE__ */ jsx("input", {
          type: "text",
          name: "location",
          className: "search-input",
          id: "location",
          placeholder: "Location"
        })]
      }), /* @__PURE__ */ jsxs("label", {
        htmlFor: "animal",
        children: ["Animal", /* @__PURE__ */ jsxs("select", {
          id: "animal",
          className: "search-input",
          value: animal,
          onChange: (e) => {
            setAnimal(e.target.value);
          },
          onBlur: (e) => {
            setAnimal(e.target.value);
          },
          children: [/* @__PURE__ */ jsx("option", {}), ANIMALS.map((animal2) => /* @__PURE__ */ jsx("option", {
            value: animal2,
            children: animal2
          }, animal2))]
        })]
      }), /* @__PURE__ */ jsxs("label", {
        htmlFor: "breed",
        children: ["Breed", /* @__PURE__ */ jsxs("select", {
          className: "search-input greyed-out-disabled",
          disabled: !breeds.length,
          name: "breed",
          id: "breed",
          children: [/* @__PURE__ */ jsx("option", {}), breeds.map((breed) => /* @__PURE__ */ jsx("option", {
            value: breed,
            children: breed
          }, breed))]
        })]
      }), /* @__PURE__ */ jsx("button", {
        className: "rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50",
        children: "Submit"
      })]
    }), /* @__PURE__ */ jsx(Results, {
      pets
    })]
  });
};
export {
  SearchParams as default
};
