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

ActiveRecord::Schema.define(version: 2021_09_03_173748) do

  create_table "messiers", force: :cascade do |t|
    t.string "m_number"
    t.string "common_name"
    t.string "description"
    t.string "constellation"
    t.string "obj_type"
    t.integer "magnitude"
    t.string "dec"
    t.string "ra"
    t.string "sky_pic"
    t.string "pretty_pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "observations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "messier_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["messier_id"], name: "index_observations_on_messier_id"
    t.index ["user_id"], name: "index_observations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "observations", "messiers"
  add_foreign_key "observations", "users"
end
