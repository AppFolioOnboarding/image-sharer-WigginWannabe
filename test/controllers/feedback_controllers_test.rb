require 'test_helper'

class FeedbackControllerTest < ActionDispatch::IntegrationTest
  test 'should create feedback' do
    assert_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { name: 'Test Name', comments: 'Imma comment' }}
    end
    assert_response :created
    assert_equal 'text/html', @response.media_type
  end

  test 'should respond with failure when save fails' do
    assert_no_difference('Feedback.count') do
      post api_feedbacks_url, params: { feedback: {
          comments: 'Imma comment'
        }
      }, xhr: true
    end

    assert_response :unprocessable_entity
    assert_equal 'application/json', @response.media_type
  end
end