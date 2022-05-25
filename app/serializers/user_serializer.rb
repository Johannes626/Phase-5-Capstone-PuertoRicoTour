class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email #, :password_digest

  has_many :saved_places
end
