<?php

namespace ImagenProactiva\GenerateFormBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Form
 * 
 */

class Form
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
     * @var string
     */
    private $radioButton;

    /**
     * @var string
     */
    private $checkbox;

    /**
     * @var string
     */
    private $textArea;


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
     * @return Form
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
     * Set radioButton
     *
     * @param string $radioButton
     * @return Form
     */
    public function setRadioButton($radioButton)
    {
        $this->radioButton = $radioButton;

        return $this;
    }

    /**
     * Get question
     *
     * @return string 
     */
    public function getRadioButton()
    {
        return $this->radioButton;
    }
    
    /**
     * Set checkbox
     *
     * @param string $checkbox
     * @return Form
     */
    public function setCheckbox($checkbox)
    {
        $this->checkbox = $checkbox;

        return $this;
    }

    /**
     * Get checkbox
     *
     * @return string 
     */
    public function getCheckbox()
    {
        return $this->checkbox;
    }

    /**
     * Set textArea
     *
     * @param string $textArea
     * @return Form
     */
    public function setTextArea($textArea)
    {
        $this->textArea = $textArea;

        return $this;
    }

    /**
     * Get textArea
     *
     * @return string 
     */
    public function getTextArea()
    {
        return $this->textArea;
    }
}
