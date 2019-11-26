# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  validates :url, presence: { message: 'URL can not be blank' },
                  format: { with: %r{(https?://.+)\.(?:jpg|jpeg|gif|png)},
                            message: 'That\'s not an image url!' }
end
