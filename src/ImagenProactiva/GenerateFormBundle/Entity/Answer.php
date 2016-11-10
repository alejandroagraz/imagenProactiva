<?php

namespace ImagenProactiva\GenerateFormBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

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
     * @var integer
     */
    private $formsId;

    /**
     * @var string
     */
    private $respuesta;

    /**
     * @var array
     */
    private $resp;

    /**
     * @var array
     */
    private $jsonResp;


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
     * Set formsId
     *
     * @param integer $formsId
     * @return Response
     */
    public function setFormsId($formsId)
    {
        $this->formsId = $formsId;

        return $this;
    }

    /**
     * Get formsId
     *
     * @return integer 
     */
    public function getFormsId()
    {
        return $this->formsId;
    }

    /**
     * Set respuesta
     *
     * @param string $respuesta
     * @return Response
     */
    public function setRespuesta($respuesta)
    {
        $this->respuesta = $respuesta;

        return $this;
    }

    /**
     * Get respuesta
     *
     * @return string 
     */
    public function getRespuesta()
    {
        return $this->respuesta;
    }

    /**
     * Set resp
     *
     * @param array $resp
     * @return Response
     */
    public function setResp($resp)
    {
        $this->resp = $resp;

        return $this;
    }

    /**
     * Get resp
     *
     * @return array 
     */
    public function getResp()
    {
        return $this->resp;
    }

    /**
     * Set jsonResp
     *
     * @param array $jsonResp
     * @return Response
     */
    public function setJsonResp($jsonResp)
    {
        $this->jsonResp = $jsonResp;

        return $this;
    }

    /**
     * Get jsonResp
     *
     * @return array 
     */
    public function getJsonResp()
    {
        return $this->jsonResp;
    }
    
    /**
     * @var \GenerateFormBundle\Entity\Question
     */
    private $form;


    /**
     * Set question
     *
     * @param \GenerateFormBundle\Entity\Question
     *
     * @return Response
     */
    public function setUser(\GenerateFormBundle\Entity\Question $question = null)
    {
        $this->form = $question;

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
