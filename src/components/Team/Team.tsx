import React from 'react';
import Card from '../Card/Card';

type Props = {};

export default function Team({}: Props) {
  return (
    <div className="mt-36">
      <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mt-14 mb-16">
        {`Our Team`}
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
