class Tag < ActiveRecord::Base
  attr_accessible :photo_id, :friend_id, :xco, :yco

  belongs_to :photo
end
