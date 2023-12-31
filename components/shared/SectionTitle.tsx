import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color,
}) => {
  return (
    <div className='mb-10 flex items-center gap-2.5'>
      <span className={cn('h-[4.5rem] w-4 ', color)}></span>
      <div className='flex flex-col items-start gap-2.5'>
        <span className='text-lg font-semibold uppercase tracking-[0.375em]'>
          {subtitle}
        </span>
        <h3 className='text-5xl'>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
