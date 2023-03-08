use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Joe Blogs",
        email: "jb@fakemail.com",
        date: "2020-06-17"
    },
    {
        name: "Jane Smith",
        email: "jane.s@fmail.org",
        date: "2021-03-20"
    },
    {
        name: "Jeffrey Lebowski",
        email: "whiterussian@protonmail.com",
        date: "1998-05-01"
    }
]);