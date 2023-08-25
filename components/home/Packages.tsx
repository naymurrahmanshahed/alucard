import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper section-padding ' id='packages'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      <HorizontalTab tabs={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Ta 5b']}>
        <p>Tab 1 content</p>
        <p>Tab 2 content</p>
        <p>Tab 3 content</p>
        <p>Tab 4 content</p>
        <p>Tab 5 content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
