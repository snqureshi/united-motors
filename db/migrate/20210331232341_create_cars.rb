class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.references :user, null: false, foreign_key: true
      t.string :img_url
      t.string :make
      t.references :model, null: false, foreign_key: true
      t.string :color
      t.integer :year
      t.integer :mileage
      t.integer :price
      t.string :body
      t.string :description
      t.timestamps
    end
  end
end
