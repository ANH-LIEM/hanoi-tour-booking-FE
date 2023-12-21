const tours = [
    { name: 'Tour A', /* other properties */ },
    { name: 'Tour B', /* other properties */ },
    { name: 'Tour C', /* other properties */ },
  ];
  
  const filterText = "";
  
  const filteredTours = tours.filter(tour => tour.name.includes(filterText));
  
  console.log(filteredTours);