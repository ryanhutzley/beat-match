class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :image_url, default: "https://s.yimg.com/ny/api/res/1.2/.N2GYfm.grlO5KT6ErO3FA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5OS42/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2"
      t.string :user_type
      t.integer :age
      t.text :bio
      t.string :password_digest

      t.timestamps
    end
  end
end
