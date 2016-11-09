<?php

namespace ImagenProactiva\GenerateFormBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use ImagenProactiva\GenerateFormBundle\Entity\Form;
use ImagenProactiva\GenerateFormBundle\Form\FormType;

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
    
    public function recibirAction(Request $request)
    {

        if ($request->isXMLHttpRequest()) 
        
        {
             $data = json_decode($request->getContent(), true);
             $em = $this->getDoctrine()->getManager();
             $forms = $em->getRepository('ImagenProactivaGenerateFormBundle:Form');
             
             //var_dump($array["foo"]);
             
            return new jsonResponse($data, 200);

        } else {
             $em = $this->getDoctrine()->getManager();

            
                return new jsonResponse('Bad Request.', 400);
        }
}

}