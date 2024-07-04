async function getData() {
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  const full_name = userList.map((user) => {
    return user.family_name + ' ' + user.first_name;
  });

  const result = await test(full_name);
  return result;
}

function test(full_name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(full_name);
    }, 3000);
  });
}

getData().then((result) => {
  console.log(result);
});