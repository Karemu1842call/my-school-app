# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_04_032547) do
  create_table "cohorts", force: :cascade do |t|
    t.string "c_name"
    t.string "techmentor"
    t.string "c_email"
    t.string "c_avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "sch_name"
    t.string "sch_avatar"
    t.string "sch_email"
    t.string "sch_telno"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "s_name"
    t.string "s_email"
    t.string "s_avatar"
    t.string "s_telno"
    t.integer "school_id", null: false
    t.integer "cohort_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cohort_id"], name: "index_students_on_cohort_id"
    t.index ["school_id"], name: "index_students_on_school_id"
  end/courses/261

  create_table "techmentors", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "devskills"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "myavatar"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "students", "cohorts"
  add_foreign_key "students", "schools"
end
