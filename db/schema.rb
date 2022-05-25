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

ActiveRecord::Schema[7.0].define(version: 2022_05_23_033903) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "places", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "location"
    t.string "description"
    t.boolean "restaurant"
    t.boolean "tourist_loc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "saved_places", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "location"
    t.string "description"
    t.boolean "restaurant"
    t.boolean "tourist_loc"
    t.boolean "favorite"
    t.bigint "user_id", null: false
    t.bigint "place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_saved_places_on_place_id"
    t.index ["user_id"], name: "index_saved_places_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "saved_places", "places"
  add_foreign_key "saved_places", "users"
end
