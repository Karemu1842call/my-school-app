Cohort.destroy_all
School.destroy_all
Student.destroy_all
Techmentor.destroy_all

cohort=Cohort.create([
    {
        c_name:"Software Development",
        techmentor:"Gol D Rodger",
        c_email:"PirateKingsdev@gmail.com",
        c_avatar:"my my ill update it later"
    },
    {
        c_name:"Data Science",
        techmentor:"Rocks D Xebec",
        c_email:"SenseKaido@gmail.com",
        c_avatar:"my my ill update it later"
    },
    {
        c_name:"Game Development",
        techmentor:"Edward Newgate",
        c_email:"legendary@gmail.com",
        c_avatar:"my my ill update it later"
    }
])

puts "done seeding cohorts"
puts "seeding schools"
schools=School.create([
    {
        sch_name:"Big boy dev school",
        sch_avatar: "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=360",
        sch_email: "bigboy@gmail.com",
        sch_telno: "+2541383329",
    },
    {
        sch_name:"Trial dev school",
        sch_avatar: "https://media.istockphoto.com/id/186655818/vector/vector-school-building.jpg?s=612x612&w=0&k=20&c=R4E6i4SFNUehDmwK1R--QddAozO4yLhAfYxMdzL1kpk=",
        sch_email: "trial@gmail.com",
        sch_telno: "+2541383329"
    },
    {
        sch_name:"Oh boy! dev school",
        sch_avatar: "https://media.istockphoto.com/id/1319938106/vector/school-building-facade-with-green-grass-and-trees-public-educational-institution-exterior.jpg?s=612x612&w=0&k=20&c=DwOHvs1pe1DemAymxwS6qg7nrgTw0CwLum_sqfB-H3U=",
        sch_email: "oohboy@gmail.com",
        sch_telno: "+2541383329"
    }
])

puts "done seeding schools"

students=Student.create([
    {
        s_name:"Monkey D luffy",
        s_email:"strawhats@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328",
    },
    {
        s_name:"Roronoa Zoro",
        s_email:"strawhat1@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328"
    },
    {
        s_name:"Vinsmoke Sanji ",
        s_email:"strawhat2@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328"
    },
    {
        s_name:" Jimbei",
        s_email:"strawhat3@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328",
    },
    {
        s_name:"Ussop",
        s_email:"strawhats@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328"
    },
    {
        s_name:"Tony Tony Chopper",
        s_email:"strawhatdoctor@gmail.com",
        s_avatar:"to be updated",
        s_telno:"+2547389328"
    }
])

puts "done seeding students"

puts "Seeding Techmentors"

techmentors=Techmentor.create([
    {
        name: "Gol D Rodger",
        email: "metasmh@gmail.com",
        devskills: "JS,C,C++,Dart,Ruby",
        myavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nNKQwRcZtxX6d6bqlm30Y4gvn4mpy0S5hg&usqp=CAU"
    },
    {
        name: "Monkey D Garp",
        email: "doorsos@gmail.com",
        devskills: "JS,C,C++,Dart,Ruby",
        myavatar: "https://static.wikia.nocookie.net/onepiece/images/4/42/Garp_Burning_Will.png/revision/latest?cb=20200626022547"
    }
])
puts "done seeding tech mentors"