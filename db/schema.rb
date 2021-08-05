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

ActiveRecord::Schema.define(version: 2021_08_04_221455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "liked_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "liked_user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matches", force: :cascade do |t|
    t.integer "rapper_id"
    t.integer "producer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "genre"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "track_tags", force: :cascade do |t|
    t.bigint "track_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tag_id"], name: "index_track_tags_on_tag_id"
    t.index ["track_id"], name: "index_track_tags_on_track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.string "song_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "image_url", default: "https://s.yimg.com/ny/api/res/1.2/.N2GYfm.grlO5KT6ErO3FA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5OS42/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2"
    t.string "user_type"
    t.integer "age"
    t.text "bio"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "track_tags", "tags"
  add_foreign_key "track_tags", "tracks"
end
