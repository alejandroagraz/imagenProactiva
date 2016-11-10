<?php

namespace ImagenProactiva\GenerateFormBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Question
 */

class Question
{
    /**
     * @var integer
     */
    private $id;
    
    /**
     * @var string
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
     * Set question
     *
     * @param string $question
     * @return Question
     */
    public function setQuestion($question)
    {
        $this->question = $question;

        return $this;
    }

    /**
     * Get question
     *
     * @return string 
     */
    public function getQuestion()
    {
        return $this->question;
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $answers;

    /**
     * Get answers
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnswers()
    {
        return $this->answers;
    }
    
    /**
     * Add answer
     *
     * @param \GenerateFormBundle\Entity\Answer $answer
     *
     * @return Question
     */
    public function addAnswer(\GenerateFormBundle\Entity\Answer $answer)
    {
        $this->answers[] = $answer;

        return $this;
    }

    /**
     * Remove answer
     *
     * @param \GenerateFormBundle\Entity\Answer $answer
     */
    public function removeAnswer(\GenerateFormBundle\Entity\Answer $answer)
    {
        $this->answers->removeElement($answer);
    }

}
