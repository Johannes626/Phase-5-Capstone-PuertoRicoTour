class SavedPlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :description, :restaurant, :tourist_loc, :favorite
  has_one :user
  has_one :place
end
