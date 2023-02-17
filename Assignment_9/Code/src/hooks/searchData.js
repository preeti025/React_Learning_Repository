const searchData = (search, restaurants) =>{
    console.log(search);
      const searchText = search.toLocaleLowerCase();
      if (searchText.length === 0) {
        return restaurants;
      }
      const filterData = restaurants.filter((restaurant) => {
        return restaurant?.data?.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
      console.log(filterData);
      return filterData;
}

export default searchData;