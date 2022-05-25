class CreateSavedPlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_places do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :description
      t.boolean :restaurant
      t.boolean :tourist_loc
      t.boolean :favorite
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
