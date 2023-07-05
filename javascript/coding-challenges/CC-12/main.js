// Task 1: Display female and male users count seperately

const task1Function = (dataArr) => {
  const task1Container = document.querySelector("#task1");
  const genderArr = dataArr.map((gender) => {
    return gender.gender;
  });
  const maleCount = genderArr.filter((male) => {
    return male === "male";
  });
  const femaleCount = genderArr.filter((female) => {
    return female === "female";
  });

  task1Container.innerHTML = `<h5>Total Males: ${maleCount.length} / Total Females: ${femaleCount.length}</h5>`;
};

// Task 2: Display all the users older than 40

const task2Function = (dataArr) => {
  const task2Container = document.querySelector("#task2");
  const ageOver40Arr = dataArr.filter((over40User) => {
    return over40User.dob.age > 40;
  });
  const ageOver40Users = ageOver40Arr.map((user) => {
    return `<h5>${user.name.first} ${user.name.last} (${user.dob.age})</h5>`;
  });

  task2Container.innerHTML = ageOver40Users.join("");
};

// Task 3: Display all the users from Germany

const task3Function = (dataArr) => {
  const task3Container = document.querySelector("#task3");
  const germanUsersArr = dataArr.filter((germanUser) => {
    return germanUser.location.country === "Germany";
  });
  const germanUsers = germanUsersArr.map((user) => {
    return `<h5>${user.name.first} ${user.name.last}</h5>`;
  });

  task3Container.innerHTML = germanUsers.join("");
};

// Task 4: Display the index position of the first user from Germany

const task4Function = (dataArr) => {
  const task4Container = document.querySelector("#task4");
  const firstGermanUser = dataArr.findIndex((germanUser) => {
    return germanUser.location.country === "Germany";
  });
  task4Container.innerHTML = `<h5>Index position of the first user from Germany: ${firstGermanUser}</h5>`;
};

// Task 5: Find the first user whoose age is 28

const task5Function = (dataArr) => {
  const task5Container = document.querySelector("#task5");
  const age28User = dataArr.find((user) => {
    return user.dob.age === 28;
  });

  task5Container.innerHTML = `<h5>${age28User.name.first} ${age28User.name.last}</h5>`;
};

// Task 6: Generate a new user list from response

let newList = [];
const task6Function = (dataArr) => {
  const task6Container = document.querySelector("#task6");
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  newList = dataArr.map((user) => {
    return {
      id: randomNum(1000, 5000),
      gender: `${user.gender}`,
      fullName: `${user.name.first} ${user.name.last}`,
      city: `${user.location.city}`,
      country: `${user.location.country}`,
      email: `${user.email}`,
      username: `${user.login.username}`,
      password: `${user.login.password}`,
      age: user.dob.age,
      picture: `${user.picture.large}`,
      credit: randomNum(1, 100),
    };
  });
  console.log(newList);
  task6Container.innerHTML = `<h5>See console log for the whole new list</h5>`;
};

// Task 7: Develop a bootstrap card and display first 20 users whose credit is greater than 50

const task7Function = (newList) => {
  const task7Container = document.querySelector("#task7");
  const creditOver50Arr = newList.filter((creditOver50) => {
    return creditOver50.credit > 50;
  });

  const first20Users = creditOver50Arr.slice(0, 20).map((user) => {
    return `<div class="card" style="width: 18rem;">
    <img src="${user.picture}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${user.fullName}</h5>
      <p class="card-text">Age: ${user.age}</p>
      <p class="card-text">Credit: ${user.credit}</p>
    </div>
  </div>`;
  });

  task7Container.innerHTML = first20Users.join("");
};

// Task 8: Add 3 buttons to filter users as all, female and male

const task8Function = (dataArr) => {
  const task8Container = document.querySelector("#task8");
  const allBtn = document.querySelector("#allBtn");
  const maleBtn = document.querySelector("#maleBtn");
  const femaleBtn = document.querySelector("#femaleBtn");

  allBtn.addEventListener("click", () => {
    const allUsers = dataArr.map((user) => {
      return `<h5>${user.name.first} ${user.name.last} (${user.gender})</h5>`;
    });
    task8Container.innerHTML = allUsers.join("");
  });

  maleBtn.addEventListener("click", () => {
    const maleUsersArr = dataArr.filter((maleUser) => {
      return maleUser.gender === "male";
    });

    const maleUsers = maleUsersArr.map((user) => {
      return `<h5>${user.name.first} ${user.name.last} (${user.gender})</h5>`;
    });

    task8Container.innerHTML = maleUsers.join("");
  });

  femaleBtn.addEventListener("click", () => {
    const femaleUsersArr = dataArr.filter((femaleUser) => {
      return femaleUser.gender === "female";
    });

    const femaleUsers = femaleUsersArr.map((user) => {
      return `<h5>${user.name.first} ${user.name.last} (${user.gender})</h5>`;
    });

    task8Container.innerHTML = femaleUsers.join("");
  });
};

// Fetching data from API and calling all the task functions
async function getInfo() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=500&seed=foo"
    );
    const data = await response.json();
    const dataArr = data.results;

    task1Function(dataArr);
    task2Function(dataArr);
    task3Function(dataArr);
    task4Function(dataArr);
    task5Function(dataArr);
    task6Function(dataArr);
    task7Function(newList);
    task8Function(dataArr);
  } catch (error) {
    console.log(error);
  }
}

getInfo();
