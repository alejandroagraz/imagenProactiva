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
     * @var \Doctrine\Common\Collections\Collection
     */
    private $resps;
    
    /**
     * Get resps
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getResps()
    {
        return $this->resps;
    }    
    
}
