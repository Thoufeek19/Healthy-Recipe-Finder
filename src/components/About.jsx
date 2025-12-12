import React from 'react';

function About() {
  return (
    <div className="w-full h-auto flex flex-col items-center py-8">
      <h1 className="text-4xl py-4">What you'll get</h1>
      <div className="w-full max-w-6xl flex flex-wrap justify-evenly p-4 rounded-md">
        <div className="p-4 w-full sm:w-1/3">
          <h2 className="text-2xl py-2">Whole-food recipes</h2>
          <p>Each dish uses everyday, unprocessed ingredients.</p>
        </div>

        <div className="p-4 w-full sm:w-1/3">
          <h2 className="text-2xl py-2">Minimum fuss</h2>
          <p>All recipes are designed to make eating healthy quick and easy.</p>
        </div>

        <div className="p-4 w-full sm:w-1/3">
          <h2 className="text-2xl py-2">Search</h2>
          <p>Filter by name or ingredient and jump straight to the recipe you need.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
