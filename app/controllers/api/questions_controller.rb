class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
        if(@questions)
            render :index
        else
            render json: @questions.errors.full_messages, status: 422
        end
    end
end
