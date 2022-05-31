import { Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar, Home, Category, Meals, Meal } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />}/>
        <Route path="/meals/:strCategory" element={<Meals />} />
        <Route path="/meal/:strMeal" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
