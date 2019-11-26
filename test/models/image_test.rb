# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'valid if url is a url with image type' do
    image = Image.new(url: 'http://google.com/logo.png')

    assert_predicate image, :valid?
  end

  test 'valid if url is a secure url' do
    image = Image.new(url: 'https://google.com/logo.png')

    assert_predicate image, :valid?
  end

  test 'invalid if url is not a url' do
    image = Image.new(url: 'NOT A URL')

    assert_not_predicate image, :valid?
  end

  test 'invalid if url is relative path' do
    image = Image.new(url: 'img.png')

    assert_not_predicate image, :valid?
  end

  test 'invalid if url is not an image type' do
    image = Image.new(url: 'http://google.com/logo.csv')

    assert_not_predicate image, :valid?
  end
end
