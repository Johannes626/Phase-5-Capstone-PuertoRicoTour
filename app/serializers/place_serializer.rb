class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :description, :restaurant, :tourist_loc
  has_many :saved_places
end
