module Api
  class FeedbacksController < ApplicationController
    def create
      feedback = Feedback.new(feedback_params)

      if feedback.save
        head :created
      else
        render json: { errors: feedback.errors }, status: :unprocessable_entity 
      end
    end

    def feedback_params
      params.require(:feedback).permit(:name, :comments)
    end
  end
end