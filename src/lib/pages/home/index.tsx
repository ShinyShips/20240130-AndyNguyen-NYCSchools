import SchoolList from './components/SchoolList';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SchoolList />
    </div>
  );
};

export default Home;
