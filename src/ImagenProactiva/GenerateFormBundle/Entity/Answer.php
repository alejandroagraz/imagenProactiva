<?php

namespace ImagenProactiva\GenerateFormBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ImagenProactiva\GenerateFormBundle\Entity\Question;

/**
 * Answer
 */
class Answer
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $answer;
    
    /**
     * @var \GenerateFormBundle\Entity\Question
     */
    private $question;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

      /**
     * Set answer
     *
     * @param string $answer
     * @return Answer
     */
    public function setAnswer($answer)
    {
        $this->answer = $answer;

        return $this;
    }

    /**
     * Get answer
     *
     * @return string 
     */
    public function getAnswer()
    {
        return $this->answer;
    }

    /**
     * Set question
     *
     * @param \GenerateFormBundle\Entity\Question $question
     *
     * @return Answer
     */
    public function setQuestion(Question $question = null)
    {
        $this->question = $question;

        return $this;
    }

    /**
     * Get question
     *
     * @return \GenerateFormBundle\Entity\Question
     */
    public function getQuestion()
    {
        return $this->question;
    }
}
