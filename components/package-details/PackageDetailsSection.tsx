import { beautyPackageType } from '@/types/packageItem';
import React from 'react';

interface PackageDetailsSectionProps {
  packageItem: beautyPackageType;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>{packageItem.title}</section>
  );
};

export default PackageDetailsSection;
