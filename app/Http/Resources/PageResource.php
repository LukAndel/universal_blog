<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'pageTitle' => $this->page_title,
            'colorset' => $this->styleset->colorset_id,
            'fb_uid' => $this->fb_uid,
            'sections' => $this->getSectionNames()
        ];
    }
}
