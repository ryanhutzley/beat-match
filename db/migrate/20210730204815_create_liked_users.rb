class CreateLikedUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :liked_users do |t|
      t.integer :user_id, foreign_key: true
      t.integer :liked_user_id
      t.timestamps
    end
  end
end
