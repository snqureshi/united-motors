class Model < ApplicationRecord
  belongs_to :make
  has_many :car
end
