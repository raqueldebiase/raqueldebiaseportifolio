// src/components/atoms/Tag.tsx
import React from 'react';

interface TagProps {
  tech: string;
}

const Tag: React.FC<TagProps> = ({ tech }) => (
  <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm mr-2 mb-2 inline-block">
    {tech}
  </span>
);

export default Tag;
