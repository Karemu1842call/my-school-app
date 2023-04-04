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
        sch_avatar: "to be updated",
        sch_email: "bigboy@gmail.com",
        sch_telno: "+2541383329",
    },
    {
        sch_name:"Trial dev school",
        sch_avatar: "to be updated",
        sch_email: "trial@gmail.com",
        sch_telno: "+2541383329"
    },
    {
        sch_name:"Oh boy! dev school",
        sch_avatar: "to be updated",
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
        name: "Mark Zuckerberg",
        email: "metasmh@gmail.com",
        devskills: "JS,C,C++,Dart,Ruby"
    },
    {
        name: "Bill Smh",
        email: "doorsos@gmail.com",
        devskills: "JS,C,C++,Dart,Ruby"
    }
])

User.create([
    {
        username:"kinoti1",
        password:"kinoti1"
    }
])