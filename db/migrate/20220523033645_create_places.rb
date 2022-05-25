class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :description
      t.boolean :restaurant
      t.boolean :tourist_loc

      t.timestamps
    end
  end
end
