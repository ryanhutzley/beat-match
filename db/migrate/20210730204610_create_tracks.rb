class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.integer :user_id, foreign_key: true
      t.string :title
      t.string :song_url
      t.string :genres

      t.timestamps
    end
  end
end
