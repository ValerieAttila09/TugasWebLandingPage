import { DottedMap } from '@/components/ReactBits/DottedMaps';
import { DottedMapMarkersData } from '@/lib/constants';
import React from 'react';

const ProjectsSection = () => {
  return (
    <div>
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="to-black absolute inset-0 bg-radial from-transparent to-70%" />
        <DottedMap markers={DottedMapMarkersData} />
      </div>
    </div>
  );
}

export default ProjectsSection;