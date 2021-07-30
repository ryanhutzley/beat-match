class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :rapper_id, foreign_key: true
      t.integer :producer_id, foreign_key: true

      t.timestamps
    end
  end
end
