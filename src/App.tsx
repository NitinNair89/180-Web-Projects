import { Featured } from '@/components/Featured';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { featured } from '@/config/config';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <Featured
        id={featured.id}
        description={featured.description}
        completionDate={featured.completionDate}
        isComplete={featured.isComplete}
        link={featured.link}
        title={featured.title}
      />
      <p className="text-muted text-italic">
        Keep watching this space for more...
      </p>
      <Footer />
    </>
  );
}

export default App;
