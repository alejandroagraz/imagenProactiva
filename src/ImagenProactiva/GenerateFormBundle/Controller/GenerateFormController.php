<?php

namespace ImagenProactiva\GenerateFormBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response
;
use ImagenProactiva\GenerateFormBundle\Entity\Form;

class GenerateFormController extends Controller
{
    public function indexAction()
    {
   
        return $this->render('ImagenProactivaGenerateFormBundle:Form:index.html.twig');
    }
    
    
    public function checkboxAction()
    {
        return $this->render('ImagenProactivaGenerateFormBundle:Form:generateCheckbox.html.twig');
    } 
    
    public function radioAction()
    {
        return $this->render('ImagenProactivaGenerateFormBundle:Form:generateRadioButtons.html.twig');
    } 
    
    public function textAction()
    {
        return $this->render('ImagenProactivaGenerateFormBundle:Form:generateTextArea.html.twig');
    } 
}
