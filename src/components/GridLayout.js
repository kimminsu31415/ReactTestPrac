import React from 'react';

const GridLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 min-h-screen">
      <header className="col-span-1 md:col-span-3 bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Header</h1>
      </header>
      <aside className="col-span-1 bg-yellow-300 p-4">
        <h2 className="text-xl">Sidebar</h2>
      </aside>
      <section className="col-span-1 md:col-span-2 bg-white p-4">
        <h2 className="text-xl">Main Content</h2>
        <p>This is the main content area.</p>
      </section>
      <footer className="col-span-1 md:col-span-3 bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Footer</h1>
      </footer>
    </div>
  );
};

export default GridLayout;
